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

  availableCampsites: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  search(start:string, end:string) {
    const searchStart: Date = new Date(start)
    const searchEnd: Date = new Date(end)

    const searchStartUTC = Date.UTC(searchStart.getFullYear(), searchStart.getMonth(), searchStart.getDate())
    const searchEndUTC = Date.UTC(searchEnd.getFullYear(), searchEnd.getMonth(), searchEnd.getDate())
    const msPerDay = 1000 * 60 * 60 * 24 

    let result = Math.floor((searchEndUTC - searchStartUTC) / msPerDay)


    console.log('click', this.availableCampsites, searchStart, searchStartUTC, searchEnd, result)
  }

}
