// render(){
//         return(
//           <Navigator
//     initialRoute={{id: 'CalculatorPage', title: 'Tip Calculator Page'}}
//     renderScene={(route, navigator) => {
//       switch (route.id) {
//         case 'CalculatorPage':
//           return <Calculator navigator={navigator} />
//           break;
//         case 'BlankPage':
//           return (
//             <View>
//               <Button
//                 style={{width:10, flex:0.1}}
//                 title="Go Back"
//                 onPress={() => navigator.pop({id:"CalculatorPage"})}
//               />
              
//               <View style={{flexDirection:'column'}}>
                
//                 <Setting/>
//               </View>

//             </View>
//           )
//           break;
//         default:
//       }
//     }}
// />
//         );
//     }