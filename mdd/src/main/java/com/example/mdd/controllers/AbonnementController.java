package com.example.mdd.controllers;

import com.example.mdd.dto.responses.AbonnementDTO;
import com.example.mdd.exceptions.NotFoundException;
import com.example.mdd.services.implementations.AbonnementService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/abonnements")
public class AbonnementController {
    private final AbonnementService abonnementService;

    public AbonnementController(AbonnementService abonnementService) {
        this.abonnementService = abonnementService;
    }

    @PostMapping("/{themeId}")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<Map<String, String>> subscribe(@PathVariable Integer themeId, Authentication authentication) throws NotFoundException {
        abonnementService.subscribe(themeId, authentication);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Successfully subscribed to theme ID: " + themeId);
        return ResponseEntity.ok(response);

    }

    @DeleteMapping("/{themeId}")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<Map<String, String>> unsubscribe(@PathVariable Integer themeId, Authentication authentication) {
        abonnementService.unsubscribe(themeId, authentication);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Successfully unsubscribed to theme ID: " + themeId);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<List<AbonnementDTO>> getAbonnements(Authentication authentication) {
        List<AbonnementDTO> abonnements = abonnementService.getAbonnements(authentication);
        return ResponseEntity.ok(abonnements);
    }

    @GetMapping("/{themeId}")
    @SecurityRequirement(name = "bearerAuth")
    public boolean isSubscribed(@PathVariable Integer themeId, Authentication authentication){
        return abonnementService.isSubscribed(themeId,authentication);
    }
}
