package com.thebook.thebook.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.thebook.thebook.Models.Categoria;
import com.thebook.thebook.Repository.CategoriaRepository;


@RestController
@RequestMapping("/thebook/categoria") //revisión
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriaController {
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping()
    public  ResponseEntity<List<Categoria>> listar() {
        try {
            return ResponseEntity.ok(categoriaRepository.findAll());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }
    
}
