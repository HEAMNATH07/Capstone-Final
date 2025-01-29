package com.example.WorkSpace.Service.Controller;

import com.example.WorkSpace.Service.Model.Workspace;
import com.example.WorkSpace.Service.Service.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workspaces")
public class WorkspaceController {

    @Autowired
    private WorkspaceService workspaceService;

    // Create a new workspace
    @PostMapping("/create")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<Workspace> createWorkspace(@RequestParam String floor,
                                                     @RequestParam String room,
                                                     @RequestParam String seatNumber,
                                                     @RequestParam String projectId) {
        Workspace workspace = workspaceService.createWorkspace(floor, room, seatNumber, projectId);
        return ResponseEntity.ok(workspace);
    }

    // Get all workspaces
    @GetMapping
    public ResponseEntity<List<Workspace>> getAllWorkspaces() {
        List<Workspace> workspaces = workspaceService.getAllWorkspaces();
        return ResponseEntity.ok(workspaces);
    }

    // Get workspace by ID
    @GetMapping("/{id}")
    public ResponseEntity<Workspace> getWorkspaceById(@PathVariable String id) {
        Workspace workspace = workspaceService.getWorkspaceById(id);
        return ResponseEntity.ok(workspace);
    }

    // Update a workspace
    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<Workspace> updateWorkspace(@PathVariable String id,
                                                     @RequestBody Workspace workspaceDetails) {
        Workspace updatedWorkspace = workspaceService.updateWorkspace(id, workspaceDetails);
        return ResponseEntity.ok(updatedWorkspace);
    }

    // Delete a workspace
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<String> deleteWorkspace(@PathVariable String id) {
        workspaceService.deleteWorkspace(id);
        return ResponseEntity.ok("Workspace deleted successfully!");
    }
    @GetMapping("/floor/{floor}/room/{room}")
    public List<Workspace> getWorkspacesByFloorAndRoom(@PathVariable String floor, @PathVariable String room) {
        return workspaceService.getWorkspacesByFloorAndRoom(floor, room);
    }

    // Get all available (unbooked) workspaces
    @GetMapping("/available")
    public List<Workspace> getAvailableWorkspaces() {
        return workspaceService.getAvailableWorkspaces();
    }
    @GetMapping("/project/{projectId}/floors-rooms")
    public List<Workspace> getFloorAndRoomByProjectId(@PathVariable String projectId) {
        return workspaceService.getFloorAndRoomByProjectId(projectId);
    }

    // Get seats by floor and room
    @GetMapping("/seats")
    public List<String> getSeatByFloorAndRoom(@RequestParam String floor, @RequestParam String room) {
        return workspaceService.getSeatByFloorAndRoom(floor, room);
    }

    // Get workspaces by booking status and project ID
    @GetMapping("/status")
    public List<Workspace> getWorkspacesByBookingStatusAndProject(
            @RequestParam boolean isBooked,
            @RequestParam String projectId) {
        return workspaceService.getWorkspacesByBookingStatusAndProject(isBooked, projectId);
    }

    // Book a workspace
    @PostMapping("/book")
    public ResponseEntity<String> bookWorkspace(@RequestParam String floor,
                                                @RequestParam String room,
                                                @RequestParam String seatNumber,
                                                @RequestParam String employeeId) {
        String response = workspaceService.bookWorkspace(floor, room, seatNumber, employeeId);
        return ResponseEntity.ok(response);
    }

    // Unbook a workspace
    @PostMapping("/unbook")
    public ResponseEntity<String> unbookWorkspace(@RequestParam String workspaceId) {
        String response = workspaceService.unbookWorkspace(workspaceId);
        return ResponseEntity.ok(response);
    }
}
