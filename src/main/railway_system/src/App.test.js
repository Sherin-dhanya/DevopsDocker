
import {  render, screen } from
'@testing-library/react';
import "@testing-library/jest-dom"
import Home from './layout/Home';
import Login from './layout/Login';
import Register from './layout/Register';
import Navbar from './layout/Navbar ';
jest.mock("react-router-dom");

describe('checking component loaded',()=>{
  // 1
    test("render 'search  button for searching the train' ", async () => {
        render(<Home/>);
        const linkElement = screen.getByRole("search");
        expect(linkElement).toBeInTheDocument();
      });
// 2
      test("render ' Table heading train  no' ", async () => {
        render(<Home/>);
        const linkElement = screen.getByRole("trainno");
        expect(linkElement).toBeInTheDocument();
      });
// 3
      test("render ' Table heading train  name' ", async () => {
        render(<Home/>);
        const linkElement = screen.getByRole("trainname");
        expect(linkElement).toBeInTheDocument();
      });
// 4
      test("render 'Table heading location  from' ", async () => {
        render(<Home/>);
        const linkElement = screen.getByRole("locationfrom");
        expect(linkElement).toBeInTheDocument();
      });
// 5
      test("render 'Table heading location  to' ", async () => {
        render(<Home/>);
        const linkElement = screen.getByRole("locationto");
        expect(linkElement).toBeInTheDocument();
      });
// 6
      test("render 'Table heading action button' ", async () => {
        render(<Home/>);
        const linkElement = screen.getByRole("action");
        expect(linkElement).toBeInTheDocument();
      });

// Test case for login page
// 7
      test("render 'Login page text box of email ' ", async () => {
        render(<Login/>);
        const linkElement = screen.getByRole("email");
        expect(linkElement).toBeInTheDocument();
      });
// 8
      it("renders 'label of email' ", () => {
        render(<Login/>);
        const linkElement = screen.getByRole("label");
        expect(linkElement).toBeInTheDocument();
         
      });
// 9
      test("render 'Login page text box of password ' ", async () => {
        render(<Login/>);
        const linkElement = screen.getByRole("password");
        expect(linkElement).toBeInTheDocument();
      });
// 10
      it("renders 'label of password' ", () => {
        render(<Login/>);
        const linkElement = screen.getByRole("pwdlabel");
        expect(linkElement).toBeInTheDocument();
         
      });
// 11
      it("renders 'Register page text box of name' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("name");
        expect(linkElement).toBeInTheDocument();
         
      });
// 12
      it("renders 'Register page label of name' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("labelname");
        expect(linkElement).toBeInTheDocument();
         
      });
// 13
      it("renders 'Register page text box of email' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("email");
        expect(linkElement).toBeInTheDocument();
         
      });
// 14
      it("renders 'Register page label of email' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("labelemail");
        expect(linkElement).toBeInTheDocument();
         
      });
// 15
      it("renders 'Register page text box of password' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("password");
        expect(linkElement).toBeInTheDocument();        
      });
// 16
      it("renders 'Register page label of password' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("labelpassword");
        expect(linkElement).toBeInTheDocument();    
      });

// 17
      it("renders 'Register page text box of  confirm password' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("confirmpassword");
        expect(linkElement).toBeInTheDocument();        
      });
// 18
      it("renders 'Register page label of confirm password' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("labelconfirmpwd");
        expect(linkElement).toBeInTheDocument();    
      });
// 19
      it("renders 'Register page register button' ", () => {
        render(<Register/>);
        const linkElement = screen.getByRole("register");
        expect(linkElement).toBeInTheDocument();    
      });

// 20
it("renders 'Login page login button' ", () => {
  render(<Login/>);
  const linkElement = screen.getByRole("loginsubmit");
  expect(linkElement).toBeInTheDocument();    
});
      
  // Test case for Navbar

  // 21
  it("renders 'Navbar page login button' ", () => {
    render(<Navbar/>);
    const linkElement = screen.getByRole("login");
    expect(linkElement).toBeInTheDocument();    
  });
    // 22
  it("renders 'Navbar page register button' ", () => {
    render(<Navbar/>);
    const linkElement = screen.getByRole("register");
    expect(linkElement).toBeInTheDocument();    
  });
    // 23
  it("renders 'Navbar page train details button' ", () => {
    render(<Navbar/>);
    const linkElement = screen.getByRole("traindetails");
    expect(linkElement).toBeInTheDocument();    
  });
    // 24
  it("renders 'Navbar page contact us button' ", () => {
    render(<Navbar/>);
    const linkElement = screen.getByRole("contactus");
    expect(linkElement).toBeInTheDocument();    
  });
    // 25
  it("renders 'Navbar page daily deals button' ", () => {
    render(<Navbar/>);
    const linkElement = screen.getByRole("dailydeals");
    expect(linkElement).toBeInTheDocument();    
  });
    // 26
  it("renders 'Navbar page alert button' ", () => {
    render(<Navbar/>);
    const linkElement = screen.getByRole("alerts");
    expect(linkElement).toBeInTheDocument();    
  });
    // 27
  it("renders 'Navbar page admin login button' ", () => {
    render(<Navbar/>);
    const linkElement = screen.getByRole("adminlogin");
    expect(linkElement).toBeInTheDocument();    
  });
      

});   