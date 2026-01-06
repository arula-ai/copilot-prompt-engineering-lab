import { User, LoginRequest, LoginResponse, Result, ApiError } from '../models/types';

// This service has intentional issues for participants to improve with good prompts

export class UserService {
  private users: Map<string, User> = new Map();

  // Challenge: This login function is incomplete and insecure
  // Participants will be asked to improve it with prompts
  async login(email: string, password: string): Promise<any> {
    // TODO: Implement proper authentication
    // Current implementation is intentionally weak
    if (email && password) {
      return { success: true, token: 'fake-token' };
    }
    return { success: false };
  }

  // Challenge: No input validation
  async createUser(data: any): Promise<User> {
    const user: User = {
      id: Math.random().toString(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role || 'customer',
      createdAt: new Date(),
      preferences: {
        theme: 'light',
        notifications: true,
        twoFactorEnabled: false,
        defaultCurrency: 'USD'
      }
    };
    this.users.set(user.id, user);
    return user;
  }

  // Challenge: No error handling
  async getUser(id: string): Promise<User> {
    return this.users.get(id)!;
  }

  // Challenge: Needs optimization - currently O(n)
  async findByEmail(email: string): Promise<User | undefined> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return undefined;
  }

  // Challenge: Missing audit logging
  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updated = { ...user, ...updates };
    this.users.set(id, updated);
    return updated;
  }

  // Challenge: Hard delete with no soft delete option
  async deleteUser(id: string): Promise<void> {
    this.users.delete(id);
  }
}
