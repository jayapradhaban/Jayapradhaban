package com;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/removeAttribute")
public class RemoveAttribute extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		ServletContext context = getServletContext();
		
		context.removeAttribute("std");
		
		resp.getWriter().print("<h1 style='background-color: yellow;color:orange;border-radius:10px;width:50%;'>Attributes removed</h1>");
		
		
	}

}
