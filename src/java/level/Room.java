/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package level;

/**
 *
 * @author Jesus Lozada
 */
public class Room {
    
    private Room roomUp;
    private Room roomDown;
    private Room roomLeft;
    private Room roomRight;
    
    private int value;
    
    public Room(int n){
        this.value = n;
        
    }
    
    public boolean addRoom(int n){
        if(this.roomDown == null || this.roomLeft == null || this.roomRight == null || this.roomUp == null){
            int room;
            while(true){
                room = (int) (Math.random()*4);
                switch(room){
                    case 0:
                        if(this.roomUp == null){
                            this.addUp(n);
                            return true;
                        }
                        break;
                    case 1:
                        if(this.roomRight == null){
                            this.addRight(n);
                            return true;
                        }
                        break;
                    case 2:
                        if(this.roomDown == null){
                            this.addDown(n);
                            return true;
                        }
                        break;
                    case 3:
                        if(this.roomLeft == null){
                            this.addLeft(n);
                            return true;
                        }
                        break;
                }
            }
        } else {
            return false;
        }
    }
    
    private void addRight(int n){
        this.roomRight = new Room(n);
    }
    
    private void addLeft(int n){
        this.roomLeft = new Room(n);
    }
    
    private void addUp(int n){
        this.roomUp = new Room(n);
    }
    
    private void addDown(int n){
        this.roomDown = new Room(n);
    }    

    public Room getRoomUp() {
        return roomUp;
    }

    public Room getRoomDown() {
        return roomDown;
    }

    public Room getRoomLeft() {
        return roomLeft;
    }

    public Room getRoomRight() {
        return roomRight;
    }

    public int getValue() {
        return value;
    }
    
    
}
