import ReferralHero from '@/components/referral/ReferralHero'
import ReferralLink from '@/components/referral/ReferralLink'
import ReferralStats from '@/components/referral/ReferralStats'
import ReferralRewards from '@/components/referral/ReferralRewards'

export default function ReferralPage() {
  return (
    <div className="min-h-screen">
      <ReferralHero />
      <ReferralLink />
      <ReferralStats />
      <ReferralRewards />
    </div>
  )
}
