package com.ladesoft.roteiro01.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "task")
@Inheritance(strategy = InheritanceType.JOINED)
@Schema(description = "Informações da tarefa")
public class Task implements ITask {
    public enum Status {
        Pendente, Finalizada
    }

    public enum TaskPriority {
        HIGH,
        MEDIUM,
        LOW
    }

    @Override
    public String getStatus() {
        if (this.taskStatus == Status.Finalizada) {
            return "Completa";
        } else {
            return "Pendente";
        }
    }

    @Override
    public void setStatus(Status status) {
        this.taskStatus = status;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("taskId")
    private Integer Id;
    @Column(nullable = false)
    private String taskTitle;
    @Column(nullable = true)
    private String taskDesc;
    @Setter
    @Column(nullable = false)
    private Status taskStatus;
    @Column(nullable = false)
    private TaskPriority taskPriority;
}
