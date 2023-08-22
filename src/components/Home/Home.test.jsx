/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import { render , screen, fireEvent, waitFor, cleanup} from "@testing-library/react";
import Home from "./Home";
import * as loginGoogle from "../../service/singInGoogle";
import * as loginEmail from "../../service/singInEmail";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

  describe('Home component', () => {
    test('should render', () => {
      const {container} = render(<Home/>);
      expect(container.innerHTML).toContain('Welcome')
    })
    test("Login with Google", async () => {
      const navigate = jest.fn();
      useNavigate.mockReturnValue(navigate);
      jest.spyOn(loginGoogle, 'singInGoogle').mockImplementation(() => Promise.resolve(true));
      const {container} = render(<Home/>);
      const button = container.querySelector('#btnGoogle');
      expect(button).toBeInTheDocument(); 
      fireEvent.click(button);
      expect(loginGoogle.singInGoogle).toHaveBeenCalled();
      cleanup();   
    }) 
    test("Fail login with Google", async () => {
      const navigate = jest.fn();
      useNavigate.mockReturnValue(navigate);
      jest.spyOn(loginGoogle, 'singInGoogle').mockImplementation(() => Promise.reject({accessToken: null}));
      const {container} = render(<Home/>);
      const button = container.querySelector('#btnGoogle');
      expect(button).toBeInTheDocument(); 
      fireEvent.click(button);
      expect(loginGoogle.singInGoogle).toHaveBeenCalled();
      cleanup();   
    }) 
    test('show a text error when the credential"s isn"t valid', async () => {
      jest.spyOn(loginEmail, 'singInEmail').mockImplementation(() => Promise.reject({accessToken: null}));
      const {container} = render(<Home/>);
      const inputEmail = screen.getByLabelText('Email');
      const inputPass = screen.getByLabelText('Password');
      const button = container.querySelector('#btnLogin');
      fireEvent.change(inputEmail, {target: {value:'juanito@falso.com'}});
      fireEvent.change(inputPass, {target:{value:''}});
      // await waitFor(() => {
        fireEvent.click(button);
      // }) 
      // await waitFor(() => {
        expect(container.querySelector('#failLogin')).toBeInTheDocument();
      // }) 
      cleanup();
  })
  test('Login with email and password', async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    jest.spyOn(loginEmail, 'singInEmail').mockImplementation(() => Promise.resolve({accessToken: true}));
    const {container} = render(<Home/>);
    const inputEmail = screen.getByLabelText('Email');
    const inputPass = screen.getByLabelText('Password');
    const button = container.querySelector('#btnLogin');
    fireEvent.change(inputEmail, {target: {value:'falso@falso.com'}});
    fireEvent.change(inputPass, {target:{value:'jajajaja'}});
    // await waitFor(() => {
      fireEvent.click(button);
    // }) 
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/wall");
    }) 
    cleanup();
})
  })
