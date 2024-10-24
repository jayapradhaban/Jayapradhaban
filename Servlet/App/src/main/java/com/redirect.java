package com;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/send")
public class redirect extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException ,ServletException {
		
		res.sendRedirect("https://github.com");
		
		
		
		
	}
}
