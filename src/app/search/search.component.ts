import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchEntry: {startDate:string, endDate:string} = {startDate: '2018-06-04', endDate: '2018-06-06'}
  reservations: {campsiteId: number, startDate: string, endDate: string}[] = [
    {campsiteId: 1, startDate: '2018-06-01', endDate: '2018-06-03'},
    {campsiteId: 1, startDate: '2018-06-08', endDate: '2018-06-10'},
    {campsiteId: 2, startDate: '2018-06-01', endDate: '2018-06-01'},
    {campsiteId: 2, startDate: '2018-06-02', endDate: '2018-06-03'},
    {campsiteId: 2, startDate: '2018-06-07', endDate: '2018-06-09'},
    {campsiteId: 3, startDate: '2018-06-01', endDate: '2018-06-02'},
    {campsiteId: 3, startDate: '2018-06-08', endDate: '2018-06-09'},
    {campsiteId: 4, startDate: '2018-06-07', endDate: '2018-06-10'},
  ]
  campsites: {id: number, name: string}[] = [
    {id: 1, name: 'Cozy Cabin'},
    {id: 2, name: 'Comfy Cabin'},
    {id: 3, name: 'Rustic Cabin'},
    {id: 4,name: 'Rickety Cabin'},
    {id: 5,name: 'Cabin in the Woods'},
  ]

  availableCampsites: {id: number, name: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  search(start:string, end:string) {
    // let noGood: number[] = []
    // let gap: number

    const searchStart: Date = new Date(start)
    const searchEnd: Date = new Date(end)

    const searchStartUTC: number = Date.UTC(searchStart.getFullYear(), searchStart.getMonth(), searchStart.getDate())
    const searchEndUTC: number = Date.UTC(searchEnd.getFullYear(), searchEnd.getMonth(), searchEnd.getDate())
    // const msPerDay:number = 1000 * 60 * 60 * 24 

    this.filterCampsites(this.evaluateReservations(searchStartUTC, searchEndUTC))

    // // let result = Math.floor((searchEndUTC - searchStartUTC) / msPerDay)
    // this.reservations.map( reservation => {
    //   const reservationStart: Date = new Date(reservation.startDate)
    //   const reservationEnd: Date = new Date(reservation.endDate)

    //   const reservationStartUTC = Date.UTC(reservationStart.getFullYear(), reservationStart.getMonth(), reservationStart.getDate())
    //   const reservationEndUTC = Date.UTC(reservationEnd.getFullYear(), reservationEnd.getMonth(), reservationEnd.getDate())

    //   if(searchStartUTC > reservationEndUTC) {
    //     gap = Math.floor(((searchStartUTC - reservationEndUTC)/msPerDay)-1)
    //     console.log('>', reservation)
    //     console.log('>', gap)
    //   } else if(searchEndUTC < reservationStartUTC) {
    //     gap = Math.floor(((reservationStartUTC - searchEndUTC)/msPerDay)-1)
    //     console.log('woot', reservation)
    //     console.log('woot', gap)
    //   }

    //   if(gap === 1 && !noGood.includes(reservation.campsiteId)) {
    //     noGood.push(reservation.campsiteId)
    //     console.log(noGood)
    //   }
    // })

    // this.campsites.map(site => {
    //   if(!noGood.includes(site.id)){
    //     this.availableCampsites.push(site)
    //   }
    // })

    console.log('click', this.availableCampsites, searchStart, searchStartUTC, searchEnd)
  }

  evaluateReservations(searchStartUTC: number, searchEndUTC: number) {
    const msPerDay:number = 1000 * 60 * 60 * 24 

    let noGood: number[] = []
    let gap: number

// let result = Math.floor((searchEndUTC - searchStartUTC) / msPerDay)
  this.reservations.map( reservation => {
    const reservationStart: Date = new Date(reservation.startDate)
    const reservationEnd: Date = new Date(reservation.endDate)

    const reservationStartUTC = Date.UTC(reservationStart.getFullYear(), reservationStart.getMonth(), reservationStart.getDate())
    const reservationEndUTC = Date.UTC(reservationEnd.getFullYear(), reservationEnd.getMonth(), reservationEnd.getDate())

    if(searchStartUTC > reservationEndUTC) {
      gap = Math.floor(((searchStartUTC - reservationEndUTC)/msPerDay)-1)
      console.log('>', reservation)
      console.log('>', gap)
    } else if(searchEndUTC < reservationStartUTC) {
      gap = Math.floor(((reservationStartUTC - searchEndUTC)/msPerDay)-1)
      console.log('woot', reservation)
      console.log('woot', gap)
    }

    if(gap === 1 && !noGood.includes(reservation.campsiteId)) {
      noGood.push(reservation.campsiteId)
      console.log(noGood)
    }
  })
  return noGood
  }

  filterCampsites(noGood: number[]) {
    this.campsites.map(site => {
      if(!noGood.includes(site.id)){
        this.availableCampsites.push(site)
      }
    })
  }

}
