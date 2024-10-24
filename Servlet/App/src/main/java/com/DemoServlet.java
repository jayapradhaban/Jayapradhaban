package com;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/demo")
public class DemoServlet extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException ,ServletException {
		
		PrintWriter out= res.getWriter();
		
		out.print("<h1>This is get method </h1>");
		
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException ,ServletException {
		
		PrintWriter out= res.getWriter();
		
		out.print("<h1>This is post method </h1>");
		
	}

}
