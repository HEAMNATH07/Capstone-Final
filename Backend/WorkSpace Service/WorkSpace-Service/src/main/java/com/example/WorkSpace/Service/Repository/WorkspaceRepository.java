package com.example.WorkSpace.Service.Repository;

import com.example.WorkSpace.Service.Model.Workspace;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface WorkspaceRepository extends MongoRepository<Workspace, String> {
    List<Workspace> findByFloorAndRoom(String floor, String room);
    List<Workspace> findByIsBooked(boolean isBooked);
    List<Workspace> findByIsBookedAndProjectId(boolean isBooked, String projectId); // Filter by project
    Workspace findByFloorAndRoomAndSeatNumber(String floor, String room, String seatNumber);

    List<Workspace> findByBooked(boolean b);
    @Query(value = "{ 'projectId': ?0 }", fields = "{ 'floor': 1, 'room': 1, '_id': 0 }")
    List<Workspace> findFloorAndRoomByProjectId(String projectId);
}