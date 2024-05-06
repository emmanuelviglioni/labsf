package com.ladesoft.roteiro01.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class TaskController {
    @GetMapping("/task")
    @Operation(summary = "Lista todas as tarefas da lista")
    public String listAll() {
        return "Listar todas as tasks";
    }
}