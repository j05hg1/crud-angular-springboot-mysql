package com.thebook.thebook.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thebook.thebook.Dto.LibroDto;
import com.thebook.thebook.Mappings.LibroMapping;
import com.thebook.thebook.Models.Libro;
import com.thebook.thebook.Repository.LibroRepository;

@RestController
@RequestMapping("/thebook/libro")
@CrossOrigin(origins = "http://localhost:4200")
public class LibroController {
    @Autowired
    private LibroRepository libroRepository;

    @GetMapping
    public ResponseEntity<List<Libro>> listar(){
        try {
            return ResponseEntity.ok(libroRepository.findAllByOrderByIdAsc());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/buscar/{titulo}")
    public ResponseEntity<List<Libro>> buscarPorTitulo(@PathVariable("titulo") String titulo) {
		try {
			return ResponseEntity.ok(libroRepository.findLikeTitulo(titulo));
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}

    @PostMapping
    public ResponseEntity<Libro> guardar(@RequestBody LibroDto libro){
        try {
            if (libroRepository.findByTitulo(libro.getTitulo()).size() > 0) {
                return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).build();
            }
            else {
                libroRepository.save(LibroMapping.libroDtoToLibro(libro));
                return ResponseEntity.ok().build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping
    public ResponseEntity<Libro> actualizar(@RequestBody LibroDto libro){
        try {
            if (libroRepository.existsById(libro.getId())) {
                libroRepository.save(LibroMapping.libroDtoToLibro(libro));
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Libro> borrar(@PathVariable("id") int id) {
        try {
            libroRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

}
