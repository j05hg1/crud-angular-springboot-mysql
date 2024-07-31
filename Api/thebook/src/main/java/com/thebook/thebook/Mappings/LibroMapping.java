package com.thebook.thebook.Mappings;

import com.thebook.thebook.Dto.LibroDto;
import com.thebook.thebook.Models.Categoria;
import com.thebook.thebook.Models.Libro;

public abstract class LibroMapping {
    public static Libro libroDtoToLibro(LibroDto libroDto) {
		Libro libro = new Libro();
		libro.setId(libroDto.getId());
		libro.setTitulo(libroDto.getTitulo());
		Categoria categoria = new Categoria();
		categoria.setId(libroDto.getId_categoria());
		libro.setCategoria(categoria);

		return libro;
	}
}
