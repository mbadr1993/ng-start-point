import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {UserToken} from '../../../../test-data/userData.test';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should assign user data', () => {
    userService.setUserData(UserToken);
    expect(userService.getUserId()).toBeTruthy()
  })

  it('should get user ID', () => {
    userService.setUserData(UserToken);
    expect(userService.getUserId()).toBe(300);
  })

  it('should get user name', () => {
    userService.setUserData(UserToken);
    expect(userService.getUserName()).toBe("Test-User.Data");
  })

  it('should get user email', () => {
    userService.setUserData(UserToken);
    expect(userService.getUserEmail()).toBe("test-user.data@valeo.com");
  })

  it('should get user roles', () => {
    userService.setUserData(UserToken);
    expect(userService.getUserRoles().length > 0).toBeTruthy('No roles assigned');
  })

  it('should get user imageUrl', () => {
    userService.setUserData(UserToken);
    expect(userService.getUserImageUrl()).toBe("https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80");
  })

  it('should get user userToken', () => {
    userService.setUserData(UserToken);
    expect(userService.getUserToken()).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAwLCJuYW1lIjoiVGVzdC1Vc2VyLkRhdGEiLCJlbWFpbCI6InRlc3QtdXNlci5kYXRhQHZhbGVvLmNvbSIsInJvbGVzIjpbIkVNUExPWUVFIl0sImltYWdlVXJsIjoiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDMwMjMzNDUzMTAtYmQ3YzFkZTYxYzdkP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05MzAmcT04MCJ9.3xLxzqtK_hoa_MawUyIZXS0l7LtvJGLyexME_m5jeyg");
  })
});
