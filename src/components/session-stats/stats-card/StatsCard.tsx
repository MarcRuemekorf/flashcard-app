import React from 'react'
import Card from '@/components/card/Card'
import Button from '@/components/input-elements/Button'

interface StatsCardProps {
    skipped: number
    mastered: number
}

const StatsCard: React.FC<StatsCardProps> = ({ skipped, mastered }) => {
    const title = skipped > mastered ? 'Good effort!' : 'Stack complete'

    return (
        <Card className="flex flex-col gap-6 h-full min-h-64 dark:bg-zinc-900 border border-zinc-800 text-white">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-3xl">{title}</h2>
                <p>Well done! You have completed the stack.</p>
            </div>
            <div className="flex justify-center gap-6 mx-auto">
                <div className="flex flex-col gap-2 text-center">
                    <p className="text-zinc-600">Skipped</p>
                    <span className="text-4xl">{skipped}</span>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <p className="text-zinc-600">Mastered</p>
                    <span className="text-4xl">{mastered}</span>
                </div>
            </div>
            <div className="flex justify-center mt-auto">
                <Button variant="outline" size="sm" className="px-6" onClick={() => console.log('Restart')}>
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        </svg>
                        <span>Restart</span>
                    </div>
                </Button>
            </div>
        </Card>
    )
}

export default StatsCard
