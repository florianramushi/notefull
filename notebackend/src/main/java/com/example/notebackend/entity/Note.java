package com.example.notebackend.entity;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "tbl_notes")
public class Note {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String body;

    private String category;


}
