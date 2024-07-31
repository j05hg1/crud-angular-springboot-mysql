package com.thebook.thebook.Dto;

public class LibroDto {
    private int id;
    private int id_categoria;
    private String titulo;
    private String autor;

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id = id;
    }
    public int getId_categoria(){
        return id_categoria;
    }
    public void setId_categoria(int id_categoria){
        this.id_categoria = id_categoria;
    }
    public String getTitulo(){
        return titulo;
    }
    public void setTitulo(String titulo){
        this.titulo = titulo;
    }
    public String getAutor(){
        return autor;
    }
}
