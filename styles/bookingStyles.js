import { StyleSheet } from "react-native";

const bookingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 15,
    paddingTop: 20
  },
  title: {
    fontSize: 21,
    fontFamily: "QuicksandSemiBold",
    marginVertical: 20,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "QuicksandMedium",
    marginBottom: 15,
    textAlign: "center"
  },
  levelContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15
  },
  levelCard: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5
  },
  selectedLevel: {
    backgroundColor: "#192f59"
  },
  levelText: {
    fontSize: 16,
    fontFamily: "QuicksandRegular",
    color: "#333"
  },
  selectedLevelText: {
    color: "white"
  },
  roomCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5
  },
  availabilityBar: {
    width: 6,
    height: "100%",
    borderRadius: 3,
    marginRight: 10
  },
  roomDetails: {
    flex: 1
  },
  roomText: {
    fontSize: 18,
    fontFamily: "QuicksandMedium"
  },
  capacityText: {
    fontSize: 14,
    color: "#666",
    fontFamily: "QuicksandRegular"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    width: "100%",
    alignItems: "center"
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "QuicksandSemiBold",
    marginBottom: 25,
    marginLeft: 18,
    alignSelf: "center",
  },
  timeSlot: {
  backgroundColor: "#f4f4f4",
  padding: 10,
  borderRadius: 8,
  marginBottom: 10,
  width: "45%", 
  alignItems: "center"
},
  timeSlotText: {
    fontSize: 16,
    fontFamily: "QuicksandRegular"
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#192f59",
    borderRadius: 50
  },
  unavailableTimeSlot: {
    backgroundColor: "#d3d3d3"
  },
  unavailableTimeSlotText: {
    color: "#888"
  }
});

export default bookingStyles;