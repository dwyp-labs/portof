#include <iostream>
#include <string>

using namespace std;

int main() {
    int N;
    string S;
    
    if (cin >> N >> S) {
        long long cntO = 0;
        long long cntS = 0;
        long long cntN = 0;
        
        for (int i=0; i < N; i++){
            if(S[i] == 'O'){
                cntO++;
            }else if (S[i]== 'S'){
                cntO += cntS;
            }else if (S[i]== 'N'){
                cntO += cntS += cntN;
            }              
        }
    }
    cout << cnt << endl;

}
