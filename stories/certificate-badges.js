import { storiesOf } from '@storybook/vue'
import CertificateBadges from '@/components/certificate-badges'
import {boolean, text} from '@storybook/addon-knobs'

const stories = storiesOf('Certificate Badges', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<CertificateBadges :avtest="avtest" :width="width"/>`,
  props: {
    width: {
      default: text('Width', '65px')
    },
    avtest: {
        default: boolean('AV Test Label', true)
    }
  }
}), CertificateBadges)
