import Contact from '.././models/contactModel.js';

// Save contact form response
export const saveContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
      userId: req.body.userId || null, // Optional field if authenticated
    });

    // Save to database
    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: newContact,
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting the form.',
    });
  }
};

