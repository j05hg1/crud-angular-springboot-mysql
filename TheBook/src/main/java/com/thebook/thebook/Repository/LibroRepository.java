package com.thebook.thebook.Repository;

import java.util.List;
import com.thebook.thebook.Models.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LibroRepository extends JpaRepository<Libro, Integer>{
    @Query(value = "SELECT * FROM libros WHERE titulo LIKE CONCAT('%',LOWER( ?1 ), '%') ORDER BY LOCATE( ?1 , titulo) ASC, titulo ASC", nativeQuery = true)
    public List<Libro> findLikeTitulo(String titulo);
    public List<Libro> findByTitulo(String titulo);
    public List<Libro> findAllByOrderByIdAsc();
    // public List<Libro> findAll();

}
