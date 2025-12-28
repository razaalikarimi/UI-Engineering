import Contact from '../models/Contact.js'

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      })
    }

    const contact = new Contact({
      name,
      email,
      subject,
      message
    })

    await contact.save()

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    res.status(500).json({
      error: 'Failed to submit contact form',
      message: error.message
    })
  }
}

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(10)
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({
      error: 'Failed to fetch contacts',
      message: error.message
    })
  }
}

