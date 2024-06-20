package com.github.mohamad4444.vortex.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

import java.util.Map;

@Controller
public class GreetingController {

	@GetMapping("/greeting")
	public String greeting(@RequestParam Map<String, String> params, Model model) {
		model.addAttribute("fname", params.get("fname"));
		model.addAttribute("lname", params.get("lname"));
		return "greeting";
	}

}