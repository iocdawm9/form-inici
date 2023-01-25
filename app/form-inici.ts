import {Component} from '@angular/core';

/**
 * @title Basic checkboxes
 */
@Component({
  selector: 'form-inici',
  templateUrl: 'form-inici.html',
  styleUrls: ['form-inici.css'],
})
export class CheckboxOverviewExample {

  navItems = [
    {
      name: 'Home',
      icon: 'home',
      href: '/'
    }
  ];

  searches = [
    {
      name: 'Dog Search',
      icon: 'search',
      href: '/runner-search'
    },
    {
      name: 'Meeting Search',
      icon: 'search',
      href: '/meeting-search'
    },
    {
      name: 'Owner Search',
      icon: 'search',
      href: '/owner-search'
    },
    {
      name: 'Trainer Search',
      icon: 'search',
      href: '/trainer-search'
    }
  ];

  creating = [
    {
      name: 'New Meeting',
      icon: 'create',
      href: '/new-meeting'
    }
  ]

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */