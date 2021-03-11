import React from 'react'
import { screen, render } from '@testing-library/react'
import ContactForm from './ContactForm'
import userEvent from '@testing-library/user-event'

test("Renders Contact Form", () => {
  render(<ContactForm />)
})

test("User can enter information", async () => {
  // Arrange:
  render(<ContactForm />)
  const name = "Garrick Suemith";

  // Act:
  const fnameInput = screen.getByLabelText(/first name/i);
  // userEvent.type(fnameInput, name.split(" ")[0])

  const lnameInput = screen.getByLabelText(/last name/i);
  userEvent.type(lnameInput, name.split(" ")[1])

  const emailInput = screen.getByLabelText(/email/i);
  userEvent.type(emailInput, name.split(" ")[0])

  const messageInput = screen.getByLabelText(/message/i);
  userEvent.type(messageInput, name)

  const errors = await screen.findByText(/error/i)
  expect(errors).not.toBeInTheDocument();

})