package com;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addCookies")
public class Addcookies extends HttpServlet{
	
	@Override
	protected void doGet (HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		Cookie c1 = new Cookie("email","tom@gmail.com");
		c1.setMaxAge(60*5);
		
		
		
		
		Cookie c2 = new Cookie("Password","123");
		
		
		res.addCookie(c1);
		res.addCookie(c2);
		
		res.getWriter().print("<h1 style='background-color: green;'>Cookies Added</h1>");
	}

}
