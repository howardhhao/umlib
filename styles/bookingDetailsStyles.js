import { StyleSheet } from "react-native";

const bookingDetailsStyles = StyleSheet.create({
  containerF: {
    width: "100%", 
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#192f59",
  },
dropdown: {
  borderColor: "#ccc",
  borderRadius: 10,
  paddingHorizontal: 10,
  backgroundColor: "#fff",
  fontFamily: "QuicksandMedium",
},

dropdownContainer: {
  borderColor: "#ccc",
  borderRadius: 10,
  
},
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
  container: { 
    flex: 1, 
    padding: 25, 
    backgroundColor: "#f9f9f9",
    alignItems: "center" 
  },
  title: { 
    fontSize: 24, 
    textAlign: "center", 
    marginBottom: 20, 
    color: "#192f59",
    fontFamily: "QuicksandSemiBold",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
   inputTitle: { 
    fontSize: 16, 
    color: "#333", 
    marginBottom: 5,
    marginLeft: 5,
    fontFamily: "QuicksandMedium",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  detailText: { 
    fontSize: 18, 
    color: "#333", 
    marginBottom: 5,
    fontFamily: "QuicksandMedium",
  },
  detailValue: {
    fontWeight: "bold",
    color: "#192f59",
  },
  input: {
    width: "100%",
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 15, 
    backgroundColor: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    fontFamily: "QuicksandRegular",
  },
  submitButton: {
    backgroundColor: "#192f59",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    marginTop: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  submitText: { 
    color: "white", 
    fontSize: 18, 
    fontFamily: "QuicksandMedium",
  }
});

export default bookingDetailsStyles;
