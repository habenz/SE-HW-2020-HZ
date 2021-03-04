package com.SE.wk2hw3.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.SE.wk2hw3.model.Movie;

@RestController
public class MovieController {

	@GetMapping("/movies")
	public Movie[] getAllMaps() {
      String url = "https://my.api.mockaroo.com/movie.json?key=bb299fd0";

      RestTemplate restTemplate = new RestTemplate();

      Movie[] response  = null;

      response = restTemplate.getForObject(url, Movie[].class);
      
      System.out.println(response);
      
      return response;
	}
	
}
