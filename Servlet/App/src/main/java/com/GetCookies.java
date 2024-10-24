package com;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/getCookies")
public class GetCookies extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		
		Cookie a[] = req.getCookies();
		
		PrintWriter out= res.getWriter();
		
		for (Cookie c : a) {
			
			out.print("<h1 style='font-style:poppins;color:blue;'> Name = " + c.getName() + " , Value = "+ c.getValue()+"</h1>");
			
		}
		
	}

}
