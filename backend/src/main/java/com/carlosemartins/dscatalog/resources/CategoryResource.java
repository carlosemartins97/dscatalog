package com.carlosemartins.dscatalog.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carlosemartins.dscatalog.dto.CategoryDTO;
import com.carlosemartins.dscatalog.entities.Category;
import com.carlosemartins.dscatalog.services.CategoryService;

@RestController
@RequestMapping(value ="/categories")
public class CategoryResource {
	
	@Autowired
	private CategoryService service;
	
	@GetMapping
	public ResponseEntity<List<CategoryDTO>> findAll() {
		List<CategoryDTO> list = service.findAll();		
		return ResponseEntity.ok().body(list);
	}
}



