/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import level.Room;

/**
 *
 * @author Jesus Lozada
 */

public class Generator {
    
    final double base = 2;
    private int nivel;
    private int [][] plano;
    
    public Generator(int nivel){
        this.nivel = nivel;
        this.init();
    }
    
    private void init(){
        crearNivel();
        crearRooms();
    }
    
    private void crearNivel(){
        int i;
        int j;
        int NRooms = (int) (Math.log10(this.nivel)/Math.log10(base)) + 5;
        this.plano = new int[(int)(NRooms/2) + 4][(int)(NRooms/2) + 4];
        
        for(i=0; i < (int)(NRooms/2) + 4; i++){
            for(j=0; j < (int)(NRooms/2) + 4; j++){
                plano[i][j] = 0;
            }
        }
    }
    
    private void crearRooms(){
        int NRooms = (int) (Math.log10(this.nivel)/Math.log10(base)) + 5;
        int cont;
        
        plano[(int) (Math.random() * plano.length)][(int) (Math.random() * plano.length)] = 1;
        for(cont = 1; cont < NRooms; cont++){
            addRoom();
        }
    }
    
    private void addRoom(){
        int x = 0;
        int y = 0;
        boolean insertar = false;
        while(!insertar){
            x = (int) (Math.random() * (plano.length-2)) + 1;
            y = (int) (Math.random() * (plano.length-2)) + 1;
            if(plano[x][y] ==0){
                if(x>0){
                    if(plano[x-1][y] !=0){
                        insertar = true;
                    }
                }
                if(x<plano.length-1){
                    if(plano[x+1][y] !=0){
                        insertar = true;
                    }
                }
                if(y>0){
                    if(plano[x][y-1] !=0){
                        insertar = true;
                    }
                }
                if(y<plano.length-1){
                    if(plano[x][y+1] !=0){
                        insertar = true;
                    }
                }
            }
        }
        
        plano[x][y] = 1;
    }

    public int[][] getPlano() {
        return plano;
    }
    
    public void printRoom(){
        int i;
        int j;
        for(i=0; i < plano.length; i++){
            for(j=0; j < plano.length; j++){
                System.out.print(plano[i][j] + " ");
            }
            System.out.println();
        }
    }    
}
