const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const adminCred = {
  name: 'priya',
  password: 'Admin@123'
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: 'User exists' });
    }

    let role = 'user';
    if (name === adminCred.name && password === adminCred.password) {
      role = 'admin';
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed, role });
    await user.save();

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET);
    res.status(201).json({ token, role });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Both required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


