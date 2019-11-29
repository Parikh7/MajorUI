import { Component, OnInit, Input, Output, OnChanges, EventEmitter,
  Directive, ViewContainerRef, ViewChildren, QueryList, ComponentFactoryResolver, AfterContentInit} from '@angular/core';
import { ChildboxComponent } from '../childbox/childbox.component';
import { Router, ActivatedRoute } from '@angular/router';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[datacontainer]',
})
export class DatacontainerDirective  {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit, OnChanges{
  @Input() postComment: Array<object> = [];
  @Output() countComments = new EventEmitter();
  public loadComponent = false;
  public commentIndex = 0;
  public reply: Array<object> = [];
  user : String;

  @ViewChildren (DatacontainerDirective) entry: QueryList<DatacontainerDirective>;

  constructor(private resolver: ComponentFactoryResolver,private route: ActivatedRoute) { }

  ngOnInit() {
    this.user=this.route.snapshot.paramMap.get('id');
  }


  ngOnChanges() {
    if (this.postComment !== undefined) {
      console.log('Main array====>', this.postComment);
    }
  }

  removeComment(no) {
    this.postComment.splice(no, 1);
    console.log('After remove array====>', this.postComment);
    this.countComments.emit(this.postComment);
  }

  replyComment(index) {
    this.loadComponent = true;
    const myFactory = this.resolver.resolveComponentFactory(ChildboxComponent);
    if (this.entry.toArray()[index].viewContainerRef.length <= 0 ) {
      const myRef = this.entry.toArray()[index].viewContainerRef.createComponent(myFactory);
      myRef.instance['commentNo'] = index;
      myRef.changeDetectorRef.detectChanges();
      myRef.instance.userReplycomment.subscribe(
        data => {
          console.log('Piyali=>', data);
          this.receiveReplyComment(data, index);
        }
      );
      myRef.instance.deletNo.subscribe(
        no => {
          myRef.destroy();
        }
      );
    }
  }

  receiveReplyComment($event, i) {
    this.reply = $event;
    console.log($event);
    this.postComment.forEach((element) => {
      if (element['commentId'] === i) {
        element['replyComment'].push(...$event);
        console.log('Main array after reply comment=>', this.postComment);
      }
    });
    console.log(this.reply);
    this.loadComponent = false;
  }


}
