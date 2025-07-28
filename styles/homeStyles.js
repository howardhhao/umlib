import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 20,
    },
    reminder_container: {
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: '#f5f2ecff',
      marginTop: 5,
      marginBottom: 20,
      paddingLeft: 15,
      marginLeft: 15,
      marginRight: 15,
      borderRadius: 10,
      height: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    row: {
      marginBottom: 10,
    },
    availability_container: {
      flexDirection: 'row', 
      alignItems: 'center', 
      
    },
    reminder: {
      color: 'black',
      fontSize: 15,
      marginRight: 105,
      fontFamily: 'QuicksandMedium',
    },
    container: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between',  
      paddingHorizontal: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      
    },
    title: {
      fontSize: 28,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      fontFamily: 'QuicksandSemiBold',
      color: '#192f59',
    },
    welcome_title: {
      fontSize: 14,
      marginBottom: 5,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      fontFamily: 'QuicksandRegular',
    },
    name:{
      fontSize: 16,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'QuicksandSemiBold',
    },
    button: {
      backgroundColor: '#192f59',
      padding: 28,
      borderRadius: 10,
      marginBottom: 20,
      height: 130,
      width: 399,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'QuicksandRegular',
      paddingTop: 15,
    },
    upcoming_booking: {
      backgroundColor: '#edf1f9ff',
      marginBottom: 20,
      padding: 20,
      marginRight: 15,
      marginLeft: 15,
      borderRadius: 10,
      height: 360,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    image: {
      width: 45,
      height: 26,
      resizeMode: 'contain', 
    },
    image_table: {
      width: 100,
      height: 75,
      marginBottom: 20,
      resizeMode: 'contain', 
  },
  
    availability: {
      backgroundColor: '#E3E8F0',
      marginBottom: 20,
      padding: 20,
      borderRadius: 10,
      height: 310,
      width: 190,
    },
    availability_text: {
      color: '#192f59',
      fontSize: 18,
      paddingBottom: 10,
      paddingTop: 10,
      fontFamily: 'QuicksandRegular',
    },
    availability_floor: {
      color: '192f59',
      paddingTop: 10,
      fontFamily: 'QuicksandMedium',
    },
    availability_rooms: {
      color: '192f59',
      paddingBottom: 2,
      fontSize: 28,
      marginRight: 10,
      fontFamily: 'QuicksandMedium',
    },
    sectionTitle: {
      color: 'black',
      fontSize: 18,
      marginBottom: 18,
      fontFamily: 'QuicksandSemiBold',
    },

reservationCard: {
  backgroundColor: '#ffffffff',
  borderRadius: 12,
  padding: 16,
  marginBottom: 12,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 3,
  elevation: 2,
  
},
cardTopRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

cardRoom: {
  fontSize: 19,
  fontWeight: '600',
  color: '#1c1c1e',
  fontFamily: 'QuicksandSemiBold',
},

badgeRow: {
  flexDirection: 'row',
  marginTop: 10,
  gap: 10,
},

badge: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f0ededff',
  borderRadius: 20,
  paddingHorizontal: 10,
  paddingVertical: 4,
},
notificationIcon: {
  position: 'absolute',
  top: 85,
  right: 22,
  zIndex: 999,
},
notificationItem: {
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderColor: '#ddd',
},

notificationText: {
  fontSize: 14,
  color: '#333',
},


badgeText: {
  fontSize: 13,
  marginLeft: 4,
  color: '#333',
  fontFamily: 'QuicksandMedium',
},

    noReservation: {
      color: 'black',
      textAlign: 'center',
      padding: 10,
      fontFamily: 'QuicksandMedium',
      fontSize: 16,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      justifyContent: 'flex-end',
    },
   modalContainer: {
  backgroundColor: '#FFF',
  padding: 40,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  height: 'auto',
  justifyContent: 'flex-end',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 10,
},
textOnlyButton: {
  backgroundColor: '#f5f2ecff',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 10,
  alignItems: 'center',
  borderColor: '#DDD',
  marginHorizontal: 19,
},

textOnlyButtonLabel: {
  fontSize: 15,
  color: '#333',
  fontWeight: '500',
  fontFamily: 'QuicksandMedium',
},

    modalTitle: {
      fontSize: 30,
      marginBottom: 20,
      marginTop: 10,
      fontFamily: 'QuicksandSemiBold',
    },
    modalDetail: {
      fontSize: 16,
      marginBottom: 5,
      fontFamily: 'QuicksandRegular',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 15,
      justifyContent: 'center',
      width: '100%',
    },
    actionButton: {
      alignItems: 'center',
      padding: 15,
    },
    ModalbuttonText: {
      fontSize: 12,
      marginTop: 5,
      fontFamily: 'QuicksandMedium',
    },
    Modal2buttonText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#fff',
  textAlign: 'center',
  fontFamily: 'QuicksandSemiBold',
  paddingVertical: 10,
},
    closeButton: {
      marginTop: 10,
      padding: 8,
      backgroundColor: '#192f59',
      borderRadius: 10,
      marginBottom: 25,
    },
    qrButton: {
      marginTop: 10,
      padding: 8,
      backgroundColor: '#192f59',
      borderRadius: 10,
    },
    closeButtonAction: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 5,
      elevation: 5,
    },
  actionButtonsRow: {
  flexDirection: 'row',
  justifyContent: 'space-around',
},

iconTextButton: {
  alignItems: 'center',
  padding: 12,
},

iconButtonText: {
  fontSize: 14,
  marginTop: 4,
  color: '#000',
  fontFamily: 'QuicksandMedium',
  
},
    modalContainerAction: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      fontFamily: 'QuicksandMedium',
    },
    modalContentAction: {
      backgroundColor: 'white',
      padding: 40,
      borderRadius: 10,
      alignItems: 'center',
      elevation: 5,
      fontFamily: 'QuicksandMedium',
      color: 'black',
      width: 350,
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
    },
    confirmButton: {
      backgroundColor: '#192f59',
      padding: 5,
      marginTop: 15,
      borderRadius: 10,
      width: 120,
    },
    ReportTextInput: {
      width: 280,
      height: 120,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      fontFamily: 'QuicksandMedium',
    },
    floatingButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#192f59',
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5, 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    modalContainerFAB: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContentFAB: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
      position: 'relative',
    },
    closeButtonFAB: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 5,
    },
    linkText: {
      color: '#007AFF',
      fontSize: 16,
      fontFamily: 'QuicksandSemiBold',
      marginBottom: 10,
      marginTop: 15,
    },
    infoText: {
      fontSize: 16,

      marginTop: 10,
      fontFamily: 'QuicksandSemiBold',
    },
    infoTextFax: {
      fontSize: 16,
      fontFamily: 'QuicksandSemiBold',
    },
    infoTextEmail: {
      fontSize: 16,
      fontFamily: 'QuicksandSemiBold',
      textAlign: 'center',
      marginTop: 10,
    },
  
    hoursText: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 10,
      fontFamily: 'QuicksandRegular',
    },
    infoTextEmail2: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 10,
      fontFamily: 'QuicksandRegular',
    },
  
    rulesText: {
      fontSize: 14,
      textAlign: 'center',
      color: 'gray',
      fontFamily: 'QuicksandRegular',
    },
    alertIcon: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    pageController: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    },
    navButton: {
      backgroundColor: "#007bff",
      padding: 8,
      borderRadius: 5,
    },
    navText: {
      color: "white",
      fontSize: 14,
    },
    currentPageText: {
      fontSize: 14,
      fontWeight: "bold",
    },
gridContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: 20,
},

infoCard: {
  width: '48%',
  backgroundColor: '#f5f2ecff',
  borderRadius: 10,
  padding: 12,
  marginBottom: 10,
  elevation: 1,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
},

cardHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 6,
},

cardIcon: {
  marginRight: 6,
},

cardTitle: {
  fontSize: 13,
  color: '#666',
  fontFamily: 'QuicksandRegular',
},

cardValue: {
  fontSize: 18,
  color: '#333',
  fontFamily: 'QuicksandSemiBold',
},

    
  
  });

export default homeStyles;