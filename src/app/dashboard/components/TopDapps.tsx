"use client";

import { motion } from "framer-motion";
import { useDashboardData } from "../hooks/useDashboardData";
import Image from "next/image";

export default function TopDapps() {
  const { topDapps, isLoading, error } = useDashboardData();

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl"
      >
        <h2 className="text-2xl font-light mb-6">
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Top Dapps
          </span>
        </h2>
        <div className="animate-pulse space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 bg-card/20 rounded-xl" />
          ))}
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl">
        <p className="text-red-500">Error loading dapps: {error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl"
    >
      <h2 className="text-2xl font-light mb-6">
        <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Top Dapps
        </span>
      </h2>

      <div className="space-y-6">
        {topDapps.map((dapp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-5 rounded-xl bg-card/20 border border-white/5 hover:bg-card/30 transition-all"
          >
            <div className="flex gap-6">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative bg-card/30">
                  {dapp.logo && (
                    <Image
                      src={dapp.logo}
                      alt={`${dapp.name} logo`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-foreground/90">
                      {dapp.name}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-2 max-w-lg">
                      {dapp.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {dapp.socialLinks?.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary/10 text-foreground/60 hover:text-primary transition-colors"
                      >
                        {social.type === "twitter" ? (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        ) : social.type === "discord" ? (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                          </svg>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="p-3 rounded-lg bg-card/10">
                    <div className="text-sm text-foreground/60">Balance</div>
                    <div className="text-primary font-medium">
                      $
                      {dapp.metrics?.balance.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div
                      className={`text-xs ${
                        dapp.metrics?.balancePercentageChange >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {dapp.metrics?.balancePercentageChange > 0 ? "+" : ""}
                      {dapp.metrics?.balancePercentageChange.toFixed(2)}%
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-card/10">
                    <div className="text-sm text-foreground/60">Volume 24h</div>
                    <div className="text-primary font-medium">
                      $
                      {dapp.metrics?.volume.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div
                      className={`text-xs ${
                        dapp.metrics?.volumePercentageChange >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {dapp.metrics?.volumePercentageChange > 0 ? "+" : ""}
                      {dapp.metrics?.volumePercentageChange.toFixed(2)}%
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-card/10">
                    <div className="text-sm text-foreground/60">Users 24h</div>
                    <div className="text-primary font-medium">
                      {dapp.metrics?.uaw.toLocaleString()}
                    </div>
                    <div
                      className={`text-xs ${
                        dapp.metrics?.uawPercentageChange >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {dapp.metrics?.uawPercentageChange > 0 ? "+" : ""}
                      {dapp.metrics?.uawPercentageChange.toFixed(2)}%
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-card/10">
                    <div className="text-sm text-foreground/60">
                      Transactions
                    </div>
                    <div className="text-primary font-medium">
                      {dapp.metrics?.transactions.toLocaleString()}
                    </div>
                    <div
                      className={`text-xs ${
                        dapp.metrics?.transactionsPercentageChange >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {dapp.metrics?.transactionsPercentageChange > 0
                        ? "+"
                        : ""}
                      {dapp.metrics?.transactionsPercentageChange.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
