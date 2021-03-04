import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent<T> {
  @Input()
  public value!: T;

  @HostBinding('attr.selected')
  public get isSelected(): string | null {
    return this.tabs.value === this.value ? '' : null;
  }

  public constructor(private readonly tabs: TabsComponent<T>) {}

  @HostListener('click')
  private select() {
    this.tabs.changeValue(this.value);
  }
}
