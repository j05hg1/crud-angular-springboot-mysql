package com.thebook.thebook.Models;

import jakarta.persistence.*;

@Entity
// @Table(name = "categorias")
public class Categoria {
    
    @Id    
    @Column(name = "id_categoria", unique = true, nullable = false)
    private Integer id;
    private String nombre;

    //Getters and Setters
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }    
}
