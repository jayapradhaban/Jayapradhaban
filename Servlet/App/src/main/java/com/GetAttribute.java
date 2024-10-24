package com;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/getAttribute")
public class GetAttribute extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		ServletContext context = getServletContext();
		
		Student s = (Student) context.getAttribute("std");
		
		resp.getWriter().print("<h1>"+s+"</h1>");
	}

}
