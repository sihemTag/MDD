package com.example.mdd.controllers;

import com.example.mdd.dto.requests.ThemeRequest;
import com.example.mdd.dto.responses.ThemeDTO;
import com.example.mdd.services.implementations.ThemeService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/themes")
public class ThemeController {

    private final ThemeService themeService;

    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @PostMapping
    @SecurityRequirement(name = "bearerAuth")
    public void addTheme(@RequestBody ThemeRequest themeRequest){
        themeService.addTheme(themeRequest.getTitle(),themeRequest.getDescription());
    }

    @DeleteMapping("{id}")
    @SecurityRequirement(name = "bearerAuth")
    public void deleteThemeById(@PathVariable Integer id){
        themeService.deleteThemeById(id);
    }

    @GetMapping
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<List<ThemeDTO>> getAllThemes() {
        List<ThemeDTO> themes = themeService.getAllThemes();
        return ResponseEntity.ok(themes);
    }
}
