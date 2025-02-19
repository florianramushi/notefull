package com.example.notebackend.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;


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
    //this updated the time whenever we update the record
@Column(name="created_at", nullable = false,updatable = false)
@CreationTimestamp
private Date createdAt;
@Column(name="updated_at")
@UpdateTimestamp
private Date updatedAt;
 
}
