import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCamera,IconInbox,IconStar,IconEye,IconEyeOff,IconRotateCcw,IconSearch,IconLogOut,IconFastForward,
  IconPlus,IconFolder, IconHeart,IconTrash2,IconChevronLeft,IconChevronRight,IconClock,IconUser,IconChevronsUp,
  IconBookmark, IconGithub, IconMail, IconPrinter ,IconFile,IconFileText,IconMinus,IconPlay,IconSquare,
  IconRefreshCw,IconEdit,IconDelete, IconInfo} from 'angular-feather';

  const icons = [
    IconCamera,
    IconClock,
    IconStar,
    IconMail,
    IconHeart,
    IconPrinter,
    IconEye,
    IconRotateCcw,
    IconFastForward,
    IconChevronsUp,
    IconLogOut,
    IconSearch,
    IconUser,
    IconChevronLeft,
    IconChevronRight,
    IconEyeOff,
    IconTrash2,
    IconBookmark,
    IconFolder,
    IconInbox,
    IconPlus,
    IconGithub,
    IconFile,
    IconFileText,
    IconMinus,
    IconPlay,
    IconSquare,
    IconRefreshCw,
    IconEdit,
    IconDelete,
    IconInfo
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: icons
})
export class IconsModule { }

