package com.fidelity.promptlab.services;

import com.fidelity.promptlab.models.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * This service has intentional issues for participants to improve with good prompts.
 */
public class UserService {

    private final Map<String, User> users = new HashMap<>();

    // Challenge: This login method is incomplete and insecure
    // Participants will be asked to improve it with prompts
    public Object login(String email, String password) {
        // TODO: Implement proper authentication
        // Current implementation is intentionally weak
        if (email != null && password != null) {
            Map<String, Object> result = new HashMap<>();
            result.put("success", true);
            result.put("token", "fake-token");
            return result;
        }
        Map<String, Object> result = new HashMap<>();
        result.put("success", false);
        return result;
    }

    // Challenge: No input validation
    public User createUser(Map<String, Object> data) {
        User user = new User();
        user.setId(UUID.randomUUID().toString());
        user.setEmail((String) data.get("email"));
        user.setFirstName((String) data.get("firstName"));
        user.setLastName((String) data.get("lastName"));
        user.setRole(UserRole.CUSTOMER);
        user.setPreferences(new UserPreferences());

        users.put(user.getId(), user);
        return user;
    }

    // Challenge: No error handling - returns null if not found
    public User getUser(String id) {
        return users.get(id);
    }

    // Challenge: Needs optimization - currently O(n)
    public User findByEmail(String email) {
        for (User user : users.values()) {
            if (user.getEmail().equals(email)) {
                return user;
            }
        }
        return null;
    }

    // Challenge: Missing audit logging
    public User updateUser(String id, Map<String, Object> updates) {
        User user = users.get(id);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        if (updates.containsKey("email")) {
            user.setEmail((String) updates.get("email"));
        }
        if (updates.containsKey("firstName")) {
            user.setFirstName((String) updates.get("firstName"));
        }
        if (updates.containsKey("lastName")) {
            user.setLastName((String) updates.get("lastName"));
        }

        return user;
    }

    // Challenge: Hard delete with no soft delete option
    public void deleteUser(String id) {
        users.remove(id);
    }
}
