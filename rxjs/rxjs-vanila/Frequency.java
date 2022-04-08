import java.util.Scanner;

public class Frequency   
{  

    static int countVowel(String sentence){
        int count =0;
        for (int i=0 ; i<sentence.length(); i++){
            char ch = sentence.charAt(i);
            if(ch == 'a'|| ch == 'e'|| ch == 'i' ||ch == 'o' ||ch == 'u'){
               count++;
            }
         }
         return count;
    }
     public static void main(String[] args) {  
         Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int[] freq = new int[str.length()];  
        int i, j;  
          
        
        char string[] = str.toCharArray();  
          
        for(i = 0; i <str.length(); i++) {  
            freq[i] = 1;  
            for(j = i+1; j <str.length(); j++) {  
                if(string[i] == string[j] || string[i] == 'a'|| string[i] == 'e'|| string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {  
                    freq[i]++;  
                       
                    string[j] = '0';  
                }  
            }  
        }   
        for(i = 0; i <freq.length; i++) {  
            if(string[i] != ' ' && string[i] != '0')  
                System.out.println(string[i] + "-" + freq[i]);  
        }
        System.out.println("vowel: " + countVowel(str));
    }  
} 