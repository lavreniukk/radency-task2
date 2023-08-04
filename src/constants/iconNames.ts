import {
    faEdit,
    faTrashCan,
    faArchive,
    faCartShopping,
    faLightbulb,
    faHeadSideVirus
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconNamesMap {
    [iconName: string]: IconDefinition;
}

const iconNameToIcon: IconNamesMap = {
    'edit': faEdit,
    'delete': faTrashCan,
    'archive': faArchive,
    'task': faCartShopping,
    'idea': faLightbulb,
    'thought': faHeadSideVirus
};

export default iconNameToIcon;
