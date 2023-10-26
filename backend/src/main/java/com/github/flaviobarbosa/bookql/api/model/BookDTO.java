package com.github.flaviobarbosa.bookql.api.model;

import java.time.LocalDate;
import java.util.UUID;
import lombok.Data;

@Data
public class BookDTO {

  private UUID id;

  private String title;

  private String isbn10;

  private Integer pages;

  private String publisher;

  private String author;

  private String subject;

  private LocalDate publishedAt;

}
