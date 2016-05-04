/**
 * Calendar Picker Component
 * By Stephani Alves - April 11, 2015
 */
'use strict';

var StyleSheet = require('react-native').StyleSheet;

var styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    alignItems: 'center',
  },
  dayWrapper: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  dayButton: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  dayLabel: {
    fontSize: 14,
    color: '#000',
    alignSelf: 'center'
  },

  dayLabelsWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
    borderColor: 'rgba(0,0,0,0.2)'
  },

  daysWrapper: {
    alignSelf: 'center',
  },

  dayLabels: {
    textAlign: 'center',
  },

  monthLabel: {
    fontSize: 16,
    color: '#000',
  },

  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 3,
    backgroundColor: 'rgba(0,0,0,0.0)',
  },

  monthWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  prevMonthSelector: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  nextMonthSelector: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  prev: {
    
  },

  next: {

  },

  weeks: {
    flexDirection: 'column'
  },

  weekRow: {
    flexDirection: 'row'
  }
});

module.exports = styles;
